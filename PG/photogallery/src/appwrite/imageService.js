import { Client, Storage } from "appwrite";

export class imageService{
client = new Client();
    databases;
    bucket;
    
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    fetchImages = async (bucketId) => {
  try {
    const response = await this.listFiles(bucketId);
    return response.files.map((file) => this.getFilePreview(bucketId, file.$id).toString());
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
};
}
export default imageService
