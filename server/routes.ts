import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api, errorSchemas } from "@shared/routes";
import { z } from "zod";
import { insertContactMessageSchema, posts, teamMembers, galleryItems, testimonials } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // API Routes
  app.get(api.posts.list.path, async (req, res) => {
    const posts = await storage.getPosts();
    res.json(posts);
  });

  app.get(api.posts.get.path, async (req, res) => {
    const post = await storage.getPostBySlug(req.params.slug);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  });

  app.get(api.team.list.path, async (req, res) => {
    const team = await storage.getTeamMembers();
    res.json(team);
  });

  app.get(api.gallery.list.path, async (req, res) => {
    const items = await storage.getGalleryItems();
    res.json(items);
  });

  app.get(api.testimonials.list.path, async (req, res) => {
    const testimonials = await storage.getTestimonials();
    res.json(testimonials);
  });

  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const input = insertContactMessageSchema.parse(req.body);
      await storage.createContactMessage(input);
      res.status(201).json({ success: true, message: "Message received" });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  await seedDatabase();

  return httpServer;
}

// Seed Data Function
export async function seedDatabase() {
  const existingPosts = await storage.getPosts();
  if (existingPosts.length === 0) {
    await db.insert(posts).values([
      {
        title: "GWDYF Partners with North-East Humanitarian Innovation Hub",
        slug: "gwdyf-partners-nehub",
        excerpt: "Facilitating Social Innovation Entrepreneurship Bootcamp for young minds.",
        content: "We are excited to announce our partnership with the North-East Humanitarian Innovation Hub to facilitate a Social Innovation Entrepreneurship Bootcamp. This program aims to equip young people with the skills needed to solve community problems through innovative business solutions.",
        coverImage: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80",
        author: "GWDYF Team",
        category: "Partnership"
      },
      {
        title: "Training 50 Youths on Tech and Entrepreneurship",
        slug: "training-50-youths-tech",
        excerpt: "Partnering with ACT Foundation and Sunlight to empower 50 youths.",
        content: "In collaboration with the ACT Foundation and Sunlight, GWDYF has successfully trained 50 youths on essential technology and entrepreneurial skills. The program covered digital literacy, business planning, and financial management.",
        coverImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80",
        author: "Nnenna Mosugu",
        category: "Impact"
      },
      {
        title: "Mentors International Partnership",
        slug: "mentors-international-partnership",
        excerpt: "Training 21st-Century Ladies on Technology.",
        content: "GWDYF partners with Mentors International to train 21st-Century Ladies on Technology. This initiative focuses on bridging the gender gap in tech and empowering young women with coding and digital marketing skills.",
        coverImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
        author: "GWDYF Team",
        category: "Partnership"
      }
    ]);
  }

  const existingTeam = await storage.getTeamMembers();
  if (existingTeam.length === 0) {
    await db.insert(teamMembers).values([
      {
        name: "Nnenna Mosugu",
        role: "Executive Director & Founder",
        bio: "Nnenna Mosugu is the founder of GWDYF, dedicated to empowering Nigerian youth through financial literacy and leadership development.",
        imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
        displayOrder: 1
      },
      {
        name: "Team Member 1",
        role: "Program Coordinator",
        bio: "Dedicated to coordinating successful youth programs.",
        imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
        displayOrder: 2
      },
      {
        name: "Team Member 2",
        role: "Financial Literacy Instructor",
        bio: "Teaching the next generation about money management.",
        imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80",
        displayOrder: 3
      }
    ]);
  }

  const existingGallery = await storage.getGalleryItems();
  if (existingGallery.length === 0) {
    await db.insert(galleryItems).values([
      {
        title: "FLiC Workshop",
        category: "FLiC",
        imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80",
        type: "photo"
      },
      {
        title: "Entrepreneurship Bootcamp",
        category: "Training",
        imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
        type: "photo"
      },
      {
        title: "Community Outreach",
        category: "Events",
        imageUrl: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80",
        type: "photo"
      },
      {
        title: "HUB Launch",
        category: "HUBs",
        imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80",
        type: "photo"
      }
    ]);
  }

  const existingTestimonials = await storage.getTestimonials();
  if (existingTestimonials.length === 0) {
    await db.insert(testimonials).values([
      {
        name: "Student A",
        role: "FLiC Member",
        content: "Joining the Financial Literacy Club changed my perspective on money. I now know how to budget and save for my future.",
        imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
      },
      {
        name: "Teacher B",
        role: "School Partner",
        content: "GWDYF's programs are impactful and necessary. Our students are more confident and financially aware.",
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
      }
    ]);
  }
}
