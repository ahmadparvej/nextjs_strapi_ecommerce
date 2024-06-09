export interface ApiResponse {
    data: Product[];
    meta: Meta;
}

export interface Product {
    id: number;
    attributes: ProductAttributes;
}

export interface ProductAttributes {
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    slug: string;
    price: number;
    available: boolean;
    description: Description[];
    size: Size[] | null;
    original_price: number;
    image: ImageData;
    category: CategoryData;
}

interface Description {
    type: string;
    children: {
        text: string;
        type: string;
    }[];
}

interface SizeData {
    data: Size[];
}

interface Size {
    size: string;
    enabled: boolean;
}

interface ImageData {
    data: ImageAttributes;
}

interface ImageAttributes {
    id: number;
    attributes: ImageFormatAttributes;
}

interface ImageFormatAttributes {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: ImageFormats;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: ProviderMetadata;
    createdAt: string;
    updatedAt: string;
}

interface ImageFormats {
    large: ImageFormat;
    small: ImageFormat;
    medium: ImageFormat;
    thumbnail: ImageFormat;
}

interface ImageFormat {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: string | null;
    size: number;
    width: number;
    height: number;
    sizeInBytes: number;
    provider_metadata: ProviderMetadata;
}

interface ProviderMetadata {
    public_id: string;
    resource_type: string;
}

interface CategoryData {
    data: CategoryAttributes;
}

interface CategoryAttributes {
    id: number;
    attributes: Category;
}

interface Category {
    name: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

interface Meta {
    pagination: Pagination;
}

interface Pagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}
