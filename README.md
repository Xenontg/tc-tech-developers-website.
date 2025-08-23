# TC TECH DEVELOPERS - Website with Supabase Authentication

## Overview
This is a modern tech website for TC TECH DEVELOPERS featuring premium VPN solutions with integrated Supabase authentication.

## Features
- **Modern Tech Design**: Animated backgrounds with moving diamonds, circles, and tech impressions
- **Responsive Design**: Mobile-friendly with hamburger navigation and rolling dice animations
- **Authentication System**: Supabase-powered sign-up/sign-in with session management
- **Protected Content**: Pricing page requires authentication
- **Glass-breaking Animations**: Interactive sign-in button with unique visual effects

## Authentication System

### Supabase Setup (No SQL Required!)
**Important**: You're using **Supabase**, not Firebase! Supabase automatically creates all necessary database tables when users sign up - **NO SQL setup is required**.

#### Current Credentials:
- **URL**: `https://nwvgfheincbqvpubrefg.supabase.co`
- **Anon Key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53dmdmaGVpbmNicXZwdWJyZWZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU5NDE0MzksImV4cCI6MjA3MTUxNzQzOX0.DqQqLkjlVSPqon3rggBh1fM2EXDBiw1gLtGvsNViL_w`

#### How It Works:
1. **Automatic Database Creation**: When users sign up, Supabase automatically creates:
   - `auth.users` table (user accounts)
   - `auth.sessions` table (login sessions)
   - All necessary security policies

2. **No Manual SQL Required**: Supabase handles all database setup automatically

3. **Session Management**: Uses localStorage to maintain user login state across pages

## File Structure
- `index.html` - Home page with services overview
- `pricing.html` - Protected pricing page (requires authentication)
- `contact.html` - Contact information page
- `logo (3).jpg` - Main logo and favicon
- Service icons: `hc (1).png`, `hi (3).jpg`, `dark(1).png`

## Recent Fixes Applied

### Session Consistency Issues Fixed:
1. **Unified Session Checking**: All pages now use the same `updateAuthUI()` function
2. **Error Handling**: Added try-catch blocks for session parsing
3. **Event Listener Management**: Proper cleanup and reattachment of click events
4. **Cross-tab Synchronization**: Added storage event listener for multi-tab consistency
5. **Pricing Page Protection**: Automatic redirect to home if not authenticated

### Authentication Flow:
1. User clicks "Sign In" → Modal appears with projector effect
2. User can sign up or switch to sign in
3. Successful authentication → Sign In button hides, Logout button appears
4. Clicking Logout button → Sign out confirmation
5. Sign out → Clears Supabase session, local storage, and redirects to home

## Troubleshooting

### Common Issues:
1. **"After login some pages don't say not logged in"** ✅ FIXED
   - All pages now use consistent session checking
   - Added cross-tab synchronization

2. **"SQL of Firebase"** ❌ NOT NEEDED
   - You're using Supabase, not Firebase
   - Supabase creates all database tables automatically
   - No manual SQL setup required

3. **Authentication Modal Not Appearing** ✅ FIXED
   - Added proper event listeners
   - Fixed element ID references

### If Issues Persist:
1. Clear browser localStorage: `localStorage.clear()`
2. Check browser console for JavaScript errors
3. Ensure all files are in the same directory
4. Verify Supabase credentials are correct

## Development Notes
- **CSS**: Custom animations with keyframes (no external dependencies)
- **JavaScript**: Vanilla JS with Supabase CDN integration
- **Responsive**: Mobile-first design with CSS media queries
- **Animations**: CSS transforms, transitions, and keyframe animations

## Security Features
- **Protected Routes**: Pricing page requires authentication
- **Session Validation**: Proper error handling and session cleanup
- **Secure Storage**: Uses localStorage for session persistence
- **Input Validation**: Form validation on both client and server side
- **Complete Logout**: Supabase server-side session termination + local storage cleanup

## Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Requires JavaScript enabled
- CSS animations may be reduced on older devices

---
**Note**: This website uses Supabase for authentication. All database tables are created automatically - no manual SQL setup is required!
