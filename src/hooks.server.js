/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	//event.locals.user = await getUserInformation(event.cookies.get('sessionid'));
    console.time("handle");
	const response = await resolve(event);
	console.timeEnd("handle");
	response.headers.set('x-custom-header', 'potato');
	console.log('hello from hooks.server.js');
	return response;   
}
 