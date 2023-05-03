import { error } from "@sveltejs/kit"
import { API_KEY } from "$env/static/private"
export async function load({ fetch, url, params })  {
   try {
      const slug = params.slug
      const index = parseInt(url.searchParams.get("index"))
      const brand = url.searchParams.get("brand")
      const search = url.searchParams.get("s")
      const response = await fetch(`http://localhost:3000/api/${slug}?key=${API_KEY}&index=${index}&brand=${brand}&search=${search}`)
      const data = await response.json()
      return { data, index, brand, search, slug }
   }
   // probably convert into unexpected error later with the svelte hook...

   catch {
      throw error(500, {
         message: "Server Error"
      })
   }
}
