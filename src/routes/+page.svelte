<script>
  import { enhance } from '$app/forms'
  import { page } from '$app/stores'

  export let data
  export let form

  $: console.log(
    `data.state: ${data.state} / $page.data.state: ${$page.data.state}`
  )
</script>

<h1>data.state: {data.state}</h1>
<h1>$page.data.state: {$page.data.state}</h1>

<h2>form: {JSON.stringify(form)}</h2>
<h2>$page.form: {JSON.stringify($page.form)}</h2>

<p>
  (In the browser console, you can see that the $page store has the correct
  value for a millisecond, but then switches back to the original value.)
</p>

<form method="POST" use:enhance>
  <button>Increase via use:enhance</button>
</form>
