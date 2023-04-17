import { error } from "@sveltejs/kit"
export async function load({ fetch, url, params })  {
   try {
      const slug = params.slug
      let index = parseInt(url.searchParams.get('index'))
      const response = await fetch(`http://localhost:3000/api/${slug}?index=${index}`)
      const data = await response.json()
      return { data, index, slug }
   }
   // probably convert into unexpected error later with the svelte hook...

   catch {
      throw error(500, {
         message: "Server Error"
      })
   }
}