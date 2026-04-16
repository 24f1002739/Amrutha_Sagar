from fastapi import FastAPI, APIRouter, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from datetime import datetime, timezone
from contextlib import asynccontextmanager
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from dotenv import load_dotenv
import asyncio

load_dotenv()

SMTP_SERVER = os.getenv("SMTP_SERVER", "smtp.gmail.com")
SMTP_PORT = int(os.getenv("SMTP_PORT", "587"))
SENDER_EMAIL = os.getenv("SENDER_EMAIL")
SENDER_PASSWORD = os.getenv("SENDER_PASSWORD")
ADMIN_EMAIL = os.getenv("ADMIN_EMAIL", "admin@amruthasagar.com")

@asynccontextmanager
async def lifespan(app: FastAPI):
    print("?? Server started - Email notifications enabled")
    yield
    print("? Server stopped")

app = FastAPI(title="Amrutha Sagar API", lifespan=lifespan)
api_router = APIRouter(prefix="/api")

class PartyOrderCreate(BaseModel):
    customer_name: str
    mobile: str
    email: EmailStr
    event_date: str
    num_people: int
    requirements: str

class PartyOrderResponse(BaseModel):
    status: str
    message: str

class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    message: str

class ContactResponse(BaseModel):
    status: str
    message: str

async def send_email(subject: str, body: str, recipient: str = ADMIN_EMAIL):
    try:
        loop = asyncio.get_event_loop()
        await loop.run_in_executor(None, _send_email_sync, subject, body, recipient)
        return True
    except Exception as e:
        print(f"? Email error: {str(e)}")
        return False

def _send_email_sync(subject: str, body: str, recipient: str):
    try:
        msg = MIMEMultipart('alternative')
        msg['Subject'] = subject
        msg['From'] = SENDER_EMAIL
        msg['To'] = recipient
        html_body = f"<html><body style='font-family: Arial, sans-serif; line-height: 1.6; color: #333;'><div style='max-width: 600px; margin: 0 auto; padding: 20px;'>{body}<hr style='border: none; border-top: 1px solid #ddd; margin: 20px 0;'><p style='color: #666; font-size: 12px;'>Sent from Amrutha Sagar Restaurant | {datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S UTC')}</p></div></body></html>"
        msg.attach(MIMEText(html_body, 'html'))
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()
        server.login(SENDER_EMAIL, SENDER_PASSWORD)
        server.send_message(msg)
        server.quit()
        print(f"? Email sent: {subject} ? {recipient}")
        return True
    except Exception as e:
        print(f"? Failed to send email: {str(e)}")
        raise

@api_router.get("/")
async def root():
    return {"message": "Amrutha Sagar Veg Restaurant API", "status": "online"}

@api_router.post("/party-orders", response_model=PartyOrderResponse)
async def create_party_order(order: PartyOrderCreate):
    try:
        admin_subject = f"?? New Party Order Enquiry - {order.customer_name}"
        admin_body = f"<h2 style='color: #022c22;'>New Party Order Enquiry</h2><div style='background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;'><p><strong>Customer Name:</strong> {order.customer_name}</p><p><strong>Mobile:</strong> {order.mobile}</p><p><strong>Email:</strong> <a href='mailto:{order.email}'>{order.email}</a></p><p><strong>Event Date:</strong> {order.event_date}</p><p><strong>Number of People:</strong> {order.num_people}</p><p><strong>Requirements:</strong></p><p style='white-space: pre-wrap; background-color: white; padding: 10px; border-left: 3px solid #FFD700;'>{order.requirements}</p></div>"
        await send_email(admin_subject, admin_body, ADMIN_EMAIL)
        customer_subject = "?? Your Party Order Enquiry Received"
        customer_body = f"<h2 style='color: #022c22;'>Thank You, {order.customer_name}!</h2><p>We received your party order enquiry. Event Date: {order.event_date}, Guests: {order.num_people}. Our team will contact you soon at {order.mobile}.</p>"
        await send_email(customer_subject, customer_body, order.email)
        return {"status": "success", "message": "Thank you! Your party order enquiry has been sent. Check your email for confirmation."}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error processing order: {str(e)}")

@api_router.post("/contact", response_model=ContactResponse)
async def create_contact(contact: ContactCreate):
    try:
        admin_subject = f"?? New Contact Form - {contact.name}"
        admin_body = f"<h2 style='color: #022c22;'>New Contact Enquiry</h2><div style='background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;'><p><strong>Name:</strong> {contact.name}</p><p><strong>Email:</strong> <a href='mailto:{contact.email}'>{contact.email}</a></p><p><strong>Message:</strong></p><p style='white-space: pre-wrap; background-color: white; padding: 10px; border-left: 3px solid #FFD700;'>{contact.message}</p></div>"
        await send_email(admin_subject, admin_body, ADMIN_EMAIL)
        customer_subject = "? We Received Your Message"
        customer_body = f"<h2 style='color: #022c22;'>Thank You, {contact.name}!</h2><p>We received your message and appreciate your interest. Our team will respond shortly.</p>"
        await send_email(customer_subject, customer_body, contact.email)
        return {"status": "success", "message": "Thank you for contacting us! Check your email for confirmation."}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error processing contact: {str(e)}")

@api_router.get("/health")
async def health_check():
    return {"status": "healthy", "timestamp": datetime.now(timezone.utc).isoformat()}

@api_router.get("/reviews")
async def get_reviews():
    reviews = [
        {"id": "1", "name": "Lakshmi Narayanan", "rating": 5, "comment": "Best vegetarian restaurant in Hosur! The dosas are perfectly crispy and the sambar is authentic. Highly recommend for family dining!"},
        {"id": "2", "name": "Venkatesh Reddy", "rating": 5, "comment": "Excellent food quality and service! We had the Amrutha special dosa and it was heavenly. Will definitely visit again!"},
        {"id": "3", "name": "Priyanka Kumari", "rating": 5, "comment": "Amazing South Indian cuisine! Their idli-sambar combo is perfection. A must-visit place in Hosur!"}
    ]
    return reviews

app.include_router(api_router)
app.add_middleware(CORSMiddleware, allow_credentials=True, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])
