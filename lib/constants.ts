const BRAND_NAME = "AI";
const PRIMARY_COLOR = "#FF4500"; // orange
const SECONDARY_COLOR = "#FF0000"; // red
const ACCENT_COLOR = "#FFFFFF"; // white

/
 * Constants and configuration for AI application
 * 
 * This file holds the brand constants and configuration settings 
 * for the VidNexus application, a platform for creating AI-generated videos. 
 * Using modern design principles, the site will reflect the cutting-edge nature 
 * of technology in the AI industry.
 */

export const colors = {
    primary: PRIMARY_COLOR,
    secondary: SECONDARY_COLOR,
    accent: ACCENT_COLOR,
};

/
 * Configuration interface for the VidNexus application.
 */
export interface AppConfig {
    brandName: string;
    colors: typeof colors;
    description: string;
}

/
 * Application configuration object.
 */
export const appConfig: AppConfig = {
    brandName: BRAND_NAME,
    colors: colors,
    description: "VidNexus is an innovative platform that leverages AI technology to create stunning videos effortlessly. Experience the future of video creation with AI."
};