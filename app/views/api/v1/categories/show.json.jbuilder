json.name @category.name
json.image_url url_for(@category.image)

json.songs @category.songs.each do |song|
    json.id song.id
    json.title song.title
    json.artist_name song.album.artist.name
    json.file_url url_for(song.file)
end

json.artists @category.artists.each do |artist|
    json.id artists.id
    json.name artists.name
    json.photo_url url_for(artists.photo)
end

json.albums @category.albums.each do |album|
    json.id albums.
    json.title albums.
    json.artist_name albums.
    json.cover_url url_for(albums.cover)
end