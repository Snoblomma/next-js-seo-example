import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {

    return [
        {
            url: 'https://your-website.com',
            lastModified: new Date(),
        },
        {
            url: 'https://your-website.com/blog',
            lastModified: new Date(),
        },
        {
            url: 'https://your-website.com/contact',
            lastModified: new Date(),
        },
    ];
}