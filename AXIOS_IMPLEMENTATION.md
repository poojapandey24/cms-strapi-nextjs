# Axios Implementation for Blog Listing Page

## Overview
This implementation adds axios for fetching blog data from a custom API instead of using hardcoded data. The system includes both a blog listing page and individual blog detail pages.

## Files Created/Modified

### 1. `src/lib/api.js` (New)
- Created axios instance with default configuration
- Added request/response interceptors for error handling
- Implemented blog API functions:
  - `getAllBlogs()` - Fetch all blog posts
  - `getBlogBySlug(slug)` - Fetch specific blog by slug
  - `getBlogByDocumentId(documentId)` - Fetch blog by document ID

### 2. `src/app/blog/page.js` (Modified)
- Added React hooks (`useState`, `useEffect`) for state management
- Implemented API data fetching with loading and error states
- Added fallback to static data if API fails
- Enhanced UI with loading indicators and error messages
- Added hover effects and better accessibility
- **Data Flow**: Fetches blog list and passes slug to detail pages via Next.js routing

### 3. `src/app/blog/[slug]/page.js` (Modified)
- Converted to client-side component with axios integration
- Added dynamic blog fetching based on URL slug parameter
- Implemented loading and error states
- Enhanced UI with proper breadcrumbs and navigation
- **Data Flow**: Receives slug from URL and fetches specific blog data

## Features Implemented

### ✅ API Integration
- Axios HTTP client for API calls
- Proper error handling and fallback mechanisms
- Data transformation from API format to component format
- Support for both listing and detail page data fetching

### ✅ User Experience
- Loading states while fetching data
- Error messages with fallback content
- Smooth hover animations
- Responsive grid layout
- Accessible semantic HTML (using `<article>`, `<time>`, `<nav>` tags)
- Proper breadcrumb navigation
- Back to blog list functionality

### ✅ Data Flow Architecture
- **Listing Page**: Fetches all blogs → Displays in grid → Links to detail pages
- **Detail Page**: Receives slug from URL → Fetches specific blog → Displays full content
- **Error Handling**: Graceful fallbacks at both levels
- **Loading States**: User feedback during data fetching

### ✅ Error Handling
- Network error handling
- API response validation
- Fallback to static data if API is unavailable
- User-friendly error messages
- 404 handling for non-existent blogs

## Configuration

### Environment Variables
Create a `.env.local` file in your project root:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

### API Response Format
The implementation expects the following API response format:

```json
{
  "data": [
    {
      "id": 3,
      "documentId": "ppzefx50bdlx78avgb344ba2",
      "title": "Blog Title",
      "slug": "blog-slug",
      "createdAt": "2025-06-30T08:41:54.549Z",
      "updatedAt": "2025-07-01T00:00:00.790Z",
      "publishedAt": "2025-07-01T00:00:00.995Z",
      "htmlContent": "<h1>Blog content with HTML...</h1>",
      "cssContent": "#component { color: #333; }"
    }
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "pageSize": 25,
      "pageCount": 1,
      "total": 1
    }
  }
}
```

## Usage

### Basic Usage
The blog pages will automatically fetch data when the components mount:

```jsx
import { blogAPI } from '@/lib/api';

// Fetch all blogs (used in listing page)
const blogs = await blogAPI.getAllBlogs();

// Fetch blog by slug (used in detail page)
const blog = await blogAPI.getBlogBySlug('my-blog-slug');

// Fetch blog by document ID
const blog = await blogAPI.getBlogByDocumentId('ppzefx50bdlx78avgb344ba2');
```

### Navigation Flow
1. **Blog Listing Page** (`/blog`):
   - Fetches all blogs from API
   - Displays in responsive grid
   - Each blog card links to detail page

2. **Blog Detail Page** (`/blog/[slug]`):
   - Receives slug from URL parameters
   - Fetches specific blog data
   - Displays full blog content with HTML rendering
   - Provides breadcrumb navigation back to listing

### Custom API Configuration
You can modify the API configuration in `src/lib/api.js`:

```javascript
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    // Add custom headers here
  },
});
```

## Dependencies Added
- `axios` - HTTP client for API requests

## Next Steps
1. Configure the API URL in environment variables
2. Ensure your API server is running on the correct port
3. Test the API integration
4. Customize the blog display as needed
5. Add additional features like pagination, search, or categories

## Troubleshooting

### Common Issues
1. **CORS Errors**: Ensure your API backend allows requests from your frontend domain
2. **API URL Issues**: Check that `NEXT_PUBLIC_API_URL` is correctly set
3. **Content Display**: The excerpt is automatically generated from HTML content
4. **Routing Issues**: Ensure your API endpoints match the expected format

### Debug Mode
Enable console logging by checking the browser console for API errors and response data.

### Data Flow Testing
1. Visit `/blog` to see the listing page
2. Click on any blog card to navigate to detail page
3. Check browser console for API calls and responses
4. Test error scenarios by temporarily changing API URL 