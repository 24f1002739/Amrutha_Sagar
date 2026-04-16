# Amrutha Sagar - Pure Vegetarian Restaurant Website

A modern, fully responsive web application for **Amrutha Sagar Veg Restaurant**, a pure vegetarian dining establishment located in Hosur, Tamil Nadu. The website showcases the restaurant's authentic South Indian cuisine, menu items, gallery, and provides functionality for party orders and customer inquiries.

## 🌟 Features

- **Responsive Design**: Mobile-first approach, works seamlessly on all devices
- **Interactive Menu Display**: Browse and explore restaurant offerings with beautiful UI
- **Party Order Enquiries**: Submit party/event booking requests with automatic email notifications
- **Contact Form**: Get in touch with the restaurant with instant email confirmations
- **Image Gallery**: Showcase restaurant ambiance and food photography
- **Customer Reviews**: Display testimonials from satisfied customers
- **Live Chat Widget**: Customer support integration
- **Floating Call Button**: Quick access to phone ordering
- **Email Notifications**: Automated email system for form submissions and confirmations
- **Modern UI Components**: Pre-built UI library with smooth animations

## 🏗️ Tech Stack

### Frontend
- **React 18** - UI library for building interactive components
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Framer Motion** - Animation library for smooth transitions and interactions
- **Lucide React** - Icon library with beautiful SVG icons
- **Axios** - HTTP client for API communication
- **React Router** - Client-side routing (if needed)

### Backend
- **FastAPI** - Modern Python web framework for building APIs
- **Uvicorn** - ASGI web server for running FastAPI
- **Pydantic** - Data validation using Python type annotations
- **Python-dotenv** - Environment variable management
- **Email-validator** - Email validation library
- **aiosmtplib** - Async SMTP for sending emails
- **CORS Middleware** - Cross-Origin Resource Sharing support

### Additional Tools
- **npm** - JavaScript package manager
- **pip** - Python package manager
- **Virtual Environment** - Isolated Python environment

## 📋 Project Structure

```
Amrutha_Sagar/
├── frontend/                    # React application
│   ├── public/
│   │   ├── index.html
│   │   └── images/             # Restaurant images and gallery
│   ├── src/
│   │   ├── components/         # React components
│   │   │   ├── About.js
│   │   │   ├── Contact.js
│   │   │   ├── Gallery.js
│   │   │   ├── Hero.js
│   │   │   ├── MenuSection.js
│   │   │   ├── PartyOrders.js
│   │   │   ├── Reviews.js
│   │   │   └── ui/            # UI component library
│   │   ├── data/              # Static data (menu, etc.)
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   ├── tailwind.config.js
│   └── .env                    # Frontend environment variables
│
├── backend/                     # FastAPI application
│   ├── server.py               # Main API server
│   ├── requirements.txt        # Python dependencies
│   ├── .env                    # Backend environment variables (sensitive)
│   └── .venv/                  # Python virtual environment
│
└── README.md                    # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- Python 3.8+
- pip (Python package manager)
- npm (comes with Node.js)

Frontend will be available at `http://localhost:3000`

## 📧 Email Notifications

The system automatically sends emails for:
- **Party Order Submissions**: Admin receives booking details, customer receives confirmation
- **Contact Form Submissions**: Admin receives inquiry, customer receives acknowledgment

Email template includes:
- Order/inquiry details
- Timestamps
- Contact information
- Branding

## 🎨 Customization

### Update Restaurant Information
- **Contact Details**: Edit `frontend/src/components/Contact.js`
- **Operating Hours**: Modify `frontend/src/components/Hero.js` and `About.js`
- **Menu Items**: Update `frontend/src/data/menuData.js`
- **Reviews**: Edit hardcoded reviews in `frontend/src/components/Reviews.js`

### Add/Modify Images
- Place images in `frontend/public/images/`
- Update image paths in component files
- Recommended formats: JPG, PNG

### Styling
- Tailwind CSS classes used throughout
- Custom colors defined in `tailwind.config.js`
- Primary Colors: `#022c22` (dark teal), `#FFD700` (gold), `#064e3b` (emerald)

## 🔧 API Endpoints

### Public Endpoints
- `POST /api/party-orders` - Submit party order enquiry
- `POST /api/contact` - Submit contact form
- `GET /api/health` - Health check endpoint

### Response Format
```json
{
  "status": "success",
  "message": "Thank you! Your enquiry has been sent."
}
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🐛 Troubleshooting

### Server won't start
- Ensure virtual environment is activated
- Check all dependencies are installed: `pip install -r requirements.txt`
- Verify port 8000 is not in use

### Emails not sending
- Verify `.env` file has correct email credentials
- Check Gmail App Password is properly set (not regular password)
- Ensure 2-factor authentication is enabled on Gmail
- Check SMTP server and port settings

### Frontend can't connect to backend
- Ensure backend server is running on port 8000
- Check `REACT_APP_BACKEND_URL` in frontend `.env`
- Verify CORS is enabled in backend

## 📈 Performance Optimization

- Images are lazy loaded
- CSS animations use `transform` and `opacity` for smooth performance
- Responsive images scale appropriately
- Minimal bundle size with tree-shaking

## 🔒 Security Notes

- Sensitive credentials stored in `.env` (never commit to git)
- CORS enabled for specified origins only
- Email validation on all form submissions
- Rate limiting recommended for production

## 🚢 Deployment

### Frontend Deployment (Vercel/Netlify)
```bash
npm run build
# Deploy the 'build' folder
```

### Backend Deployment
- Use a production ASGI server like Gunicorn
- Set environment variables on hosting platform
- Use a proper email service for production

## 📝 License

This project is proprietary and intended for Amrutha Sagar Restaurant.

## 👥 Contact & Support

For inquiries about this project, please contact the restaurant directly.

---

**Built with ❤️ for Amrutha Sagar Veg Restaurant**
