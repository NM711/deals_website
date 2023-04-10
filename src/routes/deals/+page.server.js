export async function load({ fetch, url })  {
   let index = url.searchParams.get('index')
   console.log(index)
   const response = await fetch(`http://localhost:3000/api/computers?index=${index}`)
   const data = await response.json()
   return { data, index }
}