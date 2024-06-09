import { fetchDataFromAPI } from '@/utils/api';

export default async function handler(req, res) {
    const { slug } = req.query;
  
    const data = await fetchDataFromAPI(`/products?filters[slug][$eq]=product-${slug}`)
  
    if (data.data.length === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }
  
    return Response.json({ data: data.data[0].attributes })
  }
  