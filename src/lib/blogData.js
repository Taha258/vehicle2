// src/lib/blogData.js

export const blogPosts = [
  {
    id: 1,
    slug: "hybrid-vs-petrol-choosing-the-right-engine",
    title: "Hybrid vs. Petrol: Choosing The Right One",
    category: "Guides",
    readTime: "9 min",
    date: "Nov 17, 2024",
    image: "/images/Enginee.jpg",
    author: "James Woods",
    authorRole: "Author",
    authorImage: "/images/men.jpg",
    content: {
      intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <span class='text-[#FAC104]'>commodo consequat</span>.",
      sections: [
        {
          title: "What You Can Expect To See",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <span class='text-[#FAC104]'>commodo consequat</span>.",
          bullets: [
            "Nisi ut aliquid ex ea commodi consequatur.",
            "Quis autem vel eum iure reprehenderit qui in ea voluptate.",
            "Velit esse quam nihil molestiae consequatur.",
            "Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur."
          ]
        },
        {
          title: "Top Highlights And Features",
          text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
          numbered: [
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
            "Quisquam est qui dolorem ipsum quia dolor sit ametlores eos qui.",
            "Ratione voluptatem sequi nesciunt. Neque porro.",
            "Quisquam est qui dolorem ipsum quia dolor sit amet."
          ]
        },
        {
          title: "Expert Opinions And Analysis",
          text: "Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
          quote: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo voluptas nulla pariatur"
        },
        {
          title: "Conclusion And Key Takeaways",
          text: "Duis aute irure dolor in reprehenderit in voluptate velit esse <span class='text-[#FAC104]'>cillum dolore</span> eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          paragraphs: [
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
            "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam."
          ]
        }
      ]
    }
  },
  {
    id: 2,
    slug: "find-the-best-car-shows-to-attend-this-year",
    title: "Find The Best Car Shows To Attend This Year",
    category: "Events",
    readTime: "8 min",
    date: "Nov 17, 2024",
    image: "/images/Black-car.jpg",
    author: "Sara Blake",
    authorRole: "Author",
    authorImage: "/images/6738c1f7ac831b128ccfcc33_Sara-p-500.jpg",
    content: {
      intro: "Discover the most exciting car shows happening around the world this year...",
      sections: [
        {
          title: "Top Car Shows Around The World",
          text: "From Geneva to Tokyo, here are the must-visit automotive events...",
          bullets: [
            "Geneva International Motor Show",
            "Tokyo Auto Salon",
            "SEMA Show Las Vegas",
            "Goodwood Festival of Speed"
          ]
        }
      ]
    }
  },
  {
    id: 3,
    slug: "2024-sports-car-reviews-top-models-ranked",
    title: "2024 Sports Car Reviews: Top Models Ranked",
    category: "Reviews",
    readTime: "11 min",
    date: "Nov 16, 2024",
    image: "/images/Red-car.jpg",
    author: "Tom Hale",
    authorRole: "Reviewer",
    authorImage: "/images/6738c1f8a220b4656b9a38e8_tom.jpg",
    content: {
      intro: "We tested the best sports cars of 2024 so you don't have to...",
      sections: [
        {
          title: "Performance Testing Results",
          text: "Our comprehensive track tests reveal surprising results...",
          numbered: [
            "Porsche 911 GT3 - Best Overall",
            "Ferrari 296 GTB - Best Hybrid",
            "McLaren Artura - Best Value",
            "Lamborghini Huracán - Best Sound"
          ]
        }
      ]
    }
  },
  {
    id: 4,
    slug: "top-tips-for-first-time-luxury-car-buyers",
    title: "Top Tips For First-Time Luxury Car Buyers",
    category: "Guides",
    readTime: "13 min",
    date: "Nov 16, 2024",
    image: "/images/BMW.jpg",
    author: "Alex Grant",
    authorRole: "Expert",
    authorImage: "/images/6738c1f8ccc3d328d217bf7c_Alex.jpg",
    content: {
      intro: "Buying your first luxury car? Here's everything you need to know...",
      sections: [
        {
          title: "Essential Buying Tips",
          text: "Navigate the luxury car market with confidence...",
          bullets: [
            "Set a realistic budget including maintenance",
            "Research depreciation rates",
            "Consider certified pre-owned options",
            "Test drive multiple competitors"
          ]
        }
      ]
    }
  },
  {
    id: 5,
    slug: "inside-the-latest-auto-expo-trends-to-watch",
    title: "Inside The Latest Auto Expo: Trends To Watch",
    category: "Events",
    readTime: "12 min",
    date: "Nov 16, 2024",
    image: "/images/Orange-car.jpg",
    author: "Lisa Chen",
    authorRole: "Journalist",
    authorImage: "/images/6738c1f70036ea32826789a5_Lisa-p-500.jpg",
    content: {
      intro: "The latest auto expo revealed some groundbreaking trends...",
      sections: [
        {
          title: "Key Trends From The Expo",
          text: "Electric vehicles dominated the show floor this year...",
          bullets: [
            "Solid-state battery technology",
            "AI-powered autonomous driving",
            "Sustainable manufacturing materials",
            "Vehicle-to-grid integration"
          ]
        }
      ]
    }
  }
];

// Related posts (for sidebar - exclude current post)
export const getRelatedPosts = (currentSlug) => {
  return blogPosts
    .filter(post => post.slug !== currentSlug)
    .slice(0, 4);
};

// Categories
export const categories = ["Reviews", "Events", "Guides"];
