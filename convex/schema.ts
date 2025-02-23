import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";


export default defineSchema({
    users: defineTable({
        userId: v.string(), // clerkId
        email: v.string(),
        name: v.string() 
    }).index("by_user_id", ["userId"]),

    codeExecutions: defineTable({
        userId: v.string(),
        language: v.string(),
        code: v.string(),
        output: v.optional(v.string()),
        error: v.optional(v.string()),
    }).index("by_user_id", ["userId"]),

    snippets: defineTable({
        userId: v.string(),
        title: v.string(),
        language: v.string(),
        code: v.string(),
        userName: v.string(), // store user's name for easy access
    }).index("by_user_id", ["userId"]),

    snippetComments: defineTable({
        snippetId: v.id("snippets"),
        userId: v.string(),
        userName: v.string(),
        content: v.string(), // This will store HTML content
    }).index("by_snippet_id", ["snippetId"]),

    
})