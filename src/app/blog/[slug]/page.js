"use client";
import { useState, useEffect, use } from "react";
import { notFound, useSearchParams } from "next/navigation";
import { blogAPI } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function BlogDetailPage({ params }) {
  const { slug } = use(params);
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const initializeBlog = async () => {
      if (!slug) {
        setError("No slug provided");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        // First, try to get data from URL query parameters
        const dataParam = searchParams.get("data");

        if (dataParam) {
          try {
            const blogData = JSON.parse(dataParam);
            setBlog({
              ...blogData,
              contentHTML: blogData.htmlContent || "",
              author: "Admin", // Default author
              publishedDate: blogData.publishedAt
                ? new Date(blogData.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "",
            });
            setLoading(false);
            return;
          } catch (parseError) {
            console.error("Failed to parse blog data from URL:", parseError);
            // Fall back to API call if URL data parsing fails
          }
        }

        // If no URL data or parsing failed, fetch from API
        const response = await blogAPI.getBlogBySlug(slug);

        if (response.data && response.data.length > 0) {
          const blogData = response.data[0];
          setBlog({
            id: blogData.id,
            documentId: blogData.documentId,
            slug: blogData.slug,
            title: blogData.title,
            category: "Blog", // Default category
            date: blogData.publishedAt
              ? new Date(blogData.publishedAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })
              : "",
            excerpt: blogData.htmlContent
              ? blogData.htmlContent.replace(/<[^>]*>/g, "").substring(0, 150) +
                "..."
              : "",
            contentHTML: blogData.htmlContent || "",
            cssContent: blogData.cssContent || "",
            image:
              blogData.image && typeof blogData.image === "object"
                ? Array.isArray(blogData.image) && blogData.image.length > 0
                  ? blogData.image[0]?.url
                  : blogData.image.url
                : null,
            author: "Admin", // Default author
            publishedDate: blogData.publishedAt
              ? new Date(blogData.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : "",
          });
        } else {
          setError("Blog not found");
        }
      } catch (err) {
        console.error("Failed to fetch blog:", err);
        setError("Failed to load blog post. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    initializeBlog();
  }, [slug, searchParams]);

  if (loading) {
    return (
      <div className="text-white min-h-screen">
        <Header />
        <main style={{ padding: "2rem", maxWidth: "900px", margin: "auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "400px",
              fontSize: "1.1rem",
              color: "#666",
            }}
          >
            Loading blog post...
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="text-white min-h-screen">
        <Header />
        <main style={{ padding: "2rem", maxWidth: "900px", margin: "auto" }}>
          <div
            style={{
              padding: "1rem",
              backgroundColor: "#fff3cd",
              border: "1px solid #ffeaa7",
              borderRadius: "8px",
              color: "#ffffff",
              textAlign: "center",
            }}
          >
            {error || "Blog post not found"}
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="text-white min-h-screen">
      <Header />
      <main
        style={{
          padding: "2rem",
          maxWidth: "900px",
          margin: "auto",
          color: "#ffffff",
          background: "#fff",
        }}
      >
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          style={{ fontSize: "0.9rem", marginBottom: "1rem", color: "#999" }}
        >
          <Link href="/" style={{ color: "#999", textDecoration: "none" }}>
            Home
          </Link>
          {" > "}
          <Link href="/blog" style={{ color: "#999", textDecoration: "none" }}>
            {blog.category}
          </Link>
          {" > "}
          <strong>{blog.title}</strong>
        </nav>

        {/* Title and Excerpt */}
        {/* <header>
          <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem", color: "#333" }}>
            {blog.title}
          </h1>
          <p style={{ color: "#666", fontSize: "1.1rem", lineHeight: "1.6" }}>
            {blog.excerpt}
          </p>
        </header> */}

        {/* Hero Image */}
        {blog.image ? (
          <div style={{ margin: "2rem 0" }}>
            <Image
              src={blog.image}
              alt={blog.title}
              width={900}
              height={450}
              style={{
                borderRadius: "10px",
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </div>
        ) : (
          <div
            style={{
              margin: "2rem 0",
              width: "100%",
              height: 300,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#f3f3f3",
              color: "#888",
              fontSize: "1.1rem",
              borderRadius: "10px",
            }}
          >
            No image available
          </div>
        )}

        {/* Author + Date */}
        {/* <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            marginBottom: "2rem",
            color: "#888",
            padding: "1rem",
            backgroundColor: "#f8f9fa",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              width: "35px",
              height: "35px",
              borderRadius: "50%",
              backgroundColor: "#e53935",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "0.8rem",
              fontWeight: "bold",
            }}
          >
            {blog.author?.charAt(0) || "A"}
          </div>
          <span>{blog.author}</span>
          <span>·</span>
          <time dateTime={blog.publishedDate}>{blog.publishedDate}</time>
        </div> */}

        {/* Blog Content */}
        {blog.contentHTML && (
          <article style={{ color: "#ffffff" }}>
            {/* Apply custom CSS if available */}
            {blog.cssContent && (
              <style dangerouslySetInnerHTML={{ __html: blog.cssContent }} />
            )}
            <div
              dangerouslySetInnerHTML={{ __html: blog.contentHTML }}
              style={{
                fontSize: "1.1rem",
                color: "#ffffff",
                lineHeight: "1.8",
              }}
            />
          </article>
        )}

        {/* Back to Blog List */}
        <div
          style={{
            marginTop: "3rem",
            paddingTop: "2rem",
            borderTop: "1px solid #eee",
          }}
        >
          <Link
            href="/blog"
            style={{
              color: "#e53935",
              textDecoration: "none",
              fontWeight: "bold",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            ← Back to Blog Posts
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
