import http from './_http'

export async function searchVideos({ order, term, apiKey })  {
	if (apiKey === '') {
		return []
	}
 
	const response = await  http.get(
		`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=${order}&q=${term}&type=video&key=${apiKey}`
	)

	const videos = response.data.items
	await Promise.all(
	     videos.map(async video => {
			var result = await http.get(
				`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${
					video.id.videoId
				}&key=${apiKey}`
			)
			video.viewCount = result.data.items[0].statistics.viewCount
		})
	)

	return videos
}