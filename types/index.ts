import { Video } from './video';

/
 * Represents a user in the AI application.
 * This interface captures the essential details about a user of the VidNexus platform.
 */
export interface User {
    id: string; // Unique identifier for the user
    username: string; // The username chosen by the user
    email: string; // The user's email address
    subscriptionStatus: SubscriptionStatus; // The current subscription status of the user
}

/
 * Enum representing the different subscription statuses a user can have.
 */
export enum SubscriptionStatus {
    FREE = 'Free',
    PRO = 'Pro',
    ENTERPRISE = 'Enterprise',
}

/
 * Represents a video created using AI technologies in the VidNexus application.
 * This interface describes the properties of an AI-generated video.
 */
export interface AIVideo extends Video {
    title: string; // Title of the AI-generated video
    description: string; // Description of the video content
    duration: number; // Duration of the video in seconds
    aiModel: string; // The AI model used to generate the video
    resolution: VideoResolution; // The resolution of the video
}

/
 * Enum representing different video resolutions available for AI-generated videos.
 */
export enum VideoResolution {
    SD = '640x480', // Standard Definition
    HD = '1280x720', // High Definition
    FULL_HD = '1920x1080', // Full High Definition
    UHD = '3840x2160', // Ultra High Definition
}

/
 * Represents the response received from the VidNexus API when fetching videos.
 * This interface is used to standardize the API response format.
 */
export interface VideoResponse {
    success: boolean; // Indicates if the API call was successful
    data: AIVideo[]; // Array of AI-generated videos
    message?: string; // Optional message providing additional information
}

/
 * Represents the settings for creating a new AI-generated video.
 * This interface allows users to customize their video creation experience.
 */
export interface VideoCreationSettings {
    userId: string; // The ID of the user creating the video
    videoTitle: string; // Title for the new video
    videoDescription: string; // Description for the new video
    selectedAIModel: string; // AI model selected for video creation
    selectedResolution: VideoResolution; // Resolution selected for the video
}

/
 * Function to create a new AI-generated video.
 * This function will handle the logic for video creation and return the result.
 * @param settings - The settings for creating the video
 * @returns A promise that resolves to a VideoResponse containing the result of the video creation
 */
export async function createAIVideo(settings: VideoCreationSettings): Promise<VideoResponse> {
    // Logic for interacting with the VidNexus API to create an AI video goes here
    // For now, returning a mock response
    return {
        success: true,
        data: [{
            id: 'video-1',
            title: settings.videoTitle,
            description: settings.videoDescription,
            duration: 120,
            aiModel: settings.selectedAIModel,
            resolution: settings.selectedResolution,
        }],
        message: 'Video created successfully!',
    };
}