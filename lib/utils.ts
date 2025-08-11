import { format } from 'date-fns';

/
 * Utility functions for the AI application, specifically tailored for VidNexus,
 * a platform that specializes in generating AI-powered videos.
 * 
 * @module utils
 */

/
 * Represents a Video object in the VidNexus platform.
 */
export interface Video {
    id: string;
    title: string;
    description: string;
    createdAt: Date;
    duration: number; // in seconds
    tags: string[];
}

/
 * Formats a Video's creation date into a human-readable string.
 * 
 * @param date - The date to format.
 * @returns A formatted date string.
 */
export const formatVideoDate = (date: Date): string => {
    return format(date, 'MMMM dd, yyyy');
};

/
 * Generates a unique identifier for a Video.
 * 
 * @returns A unique string identifier.
 */
export const generateVideoId = (): string => {
    return vid_${Date.now()}_${Math.random().toString(36).substr(2, 9)};
};

/
 * Helper function to create a new Video object.
 * 
 * @param title - The title of the video.
 * @param description - A brief description of the video.
 * @param duration - The duration of the video in seconds.
 * @param tags - An array of tags related to the video.
 * @returns A new Video object.
 */
export const createVideo = (title: string, description: string, duration: number, tags: string[]): Video => {
    return {
        id: generateVideoId(),
        title,
        description,
        createdAt: new Date(),
        duration,
        tags,
    };
};

/
 * Checks if a tag is valid for the VidNexus platform.
 * 
 * @param tag - The tag to validate.
 * @returns A boolean indicating if the tag is valid.
 */
export const isValidTag = (tag: string): boolean => {
    const validTags = ['AI', 'video', 'technology', 'innovation', 'content'];
    return validTags.includes(tag);
};

/
 * Utility function to convert seconds into a human-readable duration format.
 * 
 * @param seconds - The duration in seconds.
 * @returns A formatted duration string (e.g., "02:30" for 150 seconds).
 */
export const formatDuration = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return ${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')};
};

/
 * Centralized function for consistent styling across the VidNexus platform.
 * 
 * @param color - The color to apply.
 * @returns A style object with the specified color.
 */
export const cn = (color: 'red' | 'orange' | 'white'): string => {
    switch (color) {
        case 'red':
            return 'background-color: #FF0000; color: #FFFFFF;';
        case 'orange':
            return 'background-color: #FFA500; color: #FFFFFF;';
        case 'white':
            return 'background-color: #FFFFFF; color: #000000;';
        default:
            return '';
    }
};