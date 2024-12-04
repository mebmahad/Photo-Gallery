import conf from '../conf/conf.js';
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    console.log("Conf values:", conf);
    this.client
      .setEndpoint(conf.appwriteUrl) // Ensure this is valid
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.error("Appwrite service :: createPost :: error", error);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.error("Appwrite service :: updatePost :: error", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.error("Appwrite service :: deletePost :: error", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.error("Appwrite service :: getPost :: error", error);
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.error("Appwrite service :: getPosts :: error", error);
      return false;
    }
  }

  // File upload service
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.error("Appwrite service :: uploadFile :: error", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.error("Appwrite service :: deleteFile :: error", error);
      return false;
    }
  }

  async getFilePreviews() {
    try {
      console.log("Endpoint:", conf.appwriteUrl);
      console.log("Project ID:", conf.appwriteProjectId);
      console.log("Bucket ID:", conf.appwriteBucketId);

      // Fetch list of files from the bucket
      const files = await this.bucket.listFiles(conf.appwriteBucketId);
      console.log("Fetched files:", files);

      // Map over files and construct preview URLs
      const previewUrls = files.files.map((file) => {
        const previewUrl = `${conf.appwriteUrl}/storage/buckets/${conf.appwriteBucketId}/files/${file.$id}/preview`;
        console.log(`Generated preview URL for file ${file.$id}: ${previewUrl}`);
        return previewUrl;
      });

      return previewUrls;
    } catch (error) {
      console.error("Error fetching file previews:", error);
      return [];
    }
  }
}

const service = new Service();
export default service;
