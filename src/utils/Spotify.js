const accessToken = "";

const Spotify = {

  async fetchWebApi(endpoint, method, body) {
    const result = await fetch(`https://api.spotify.com/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      method,
      body: JSON.stringify(body)
    });
    const jsonResponse = await result.json();
    if (result.status == 401) {
      alert("OLD TOKEN");
    }
    return jsonResponse;
  },

  async search(searchText) {
    const jsonResponse = await this.fetchWebApi(
      `v1/search?type=track&q=${searchText}`, 'GET'
    );
    if (!jsonResponse.tracks) {
      return [];
    }
    return jsonResponse.tracks.items.map(track => ({
      id: track.id,
      name: track.name,
      artist: track.artists[0].name,
      album: track.album.name,
      uri: track.uri
    }));
  },

  async savePlaylist(name, trackUris) {
    if (!name || !trackUris.length) {
      return;
    };
    const { id: user_id } = await this.fetchWebApi('v1/me', 'GET');

    const playlist = await this.fetchWebApi(
      `v1/users/${user_id}/playlists`, 'POST', {
      "name": name,
      "description": "Playlist created by the tutorial on codeacademy",
      "public": false
    });
    await this.fetchWebApi(
      `v1/playlists/${playlist.id}/tracks?uris=${trackUris.join(',')}`,
      'POST'
    );

    return playlist;
  }
};

export default Spotify;