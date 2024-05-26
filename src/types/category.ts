export interface CategoryAttributes {
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Category {
  id: number;
  attributes: CategoryAttributes;
}

interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

interface Meta {
  pagination: Pagination;
}

interface CategoriesResponse {
  data: Category[];
  meta: Meta;
}

// Example usage
const response: CategoriesResponse = {
  data: [
    {
      id: 1,
      attributes: {
        name: "tshirt",
        slug: "tshirt",
        createdAt: "2024-05-20T12:27:51.199Z",
        updatedAt: "2024-05-20T12:28:10.510Z",
        publishedAt: "2024-05-20T12:28:09.754Z",
      },
    },
    {
      id: 2,
      attributes: {
        name: "jacket",
        slug: "jacket",
        createdAt: "2024-05-26T03:02:30.495Z",
        updatedAt: "2024-05-26T03:02:46.900Z",
        publishedAt: "2024-05-26T03:02:46.289Z",
      },
    },
  ],
  meta: {
    pagination: {
      page: 1,
      pageSize: 25,
      pageCount: 1,
      total: 2,
    },
  },
};
