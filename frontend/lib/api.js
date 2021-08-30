const API_URL = process.env.WP_API_URL;

async function fetchAPI(query, { variables } = {}) {
  // Set up some headers to tell the fetch call
  // that this is an application/json type
  const headers = { 'Content-Type': 'application/json' };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      'Authorization'
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
  }

  // build out the fetch() call using the API_URL
  // environment variable pulled in at the start
  // Note the merging of the query and variables
  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query, variables })
  });

  // error handling work
  const json = await res.json();
  if (json.errors) {
    console.log(json.errors);
    console.log('error details', query, variables);
    throw new Error('Failed to fetch API');
  }
  return json.data;
}

// Notice the 'export' keyword here. We'll be calling this function
// directly in our index.js page, so it needs to be exported
export async function getAllPosts(preview) {
    const data = await fetchAPI(
      `
      query AllPosts {
        posts( where: { orderby: { field: DATE, order: DESC}}) {
	data: edges {
      node {
        id
	date
	title
	slug
        extraPostInfo {
          videos {
            mediaItemUrl
          }
          previewImage {
            mediaItemUrl
          }
          summary
        }
        date
        author {
          node {
            name
          }
        }
      }
    }
	}
      }
      `
    );

    return data?.posts;
  }
///for single post
export async function getSinglePost(preview) {
    const data = await fetchAPI(
      `
      query singlePost {
        posts(first : 3, where: { orderby: { field: DATE, order: DESC}}) {
	edges {
      node {
        id
	date
	title
	slug
        extraPostInfo {
          videos {
            mediaItemUrl
          }
          previewImage {
            mediaItemUrl
          }
          summary
        }
        date
        author {
          node {
            name
          }
        }
      }
    }
	}
      }
      `
    );

    return data?.posts;
  }
  
  
  export async function getAllPostsWithSlug() {
    const data = await fetchAPI(
      `
      {
        posts(first: 10000) {
          edges {
            node {
              slug
            }
          }
        }
      }
    `);
    return data?.posts;
  }

  export async function getPost(slug) {
    const data = await fetchAPI(
      `
      fragment PostFields on Post {
        title
        excerpt
        slug
        date
        extraPostInfo {
          videos {
            mediaItemUrl
          }
          previewImage {
            mediaItemUrl
          }
          summary
          }
      }
      query PostBySlug($id: ID!, $idType: PostIdType!) {
        post(id: $id, idType: $idType) {
          ...PostFields
          content
        }
      }
    `,
      {
        variables: {
          id: slug,
          idType: 'SLUG'
        }
      }
    );

    return data;
  }

  //customized queries for practice
//Latest
export async function getlatestNews(preview) {
  const data = await fetchAPI(
    `
    query latestNews {
      posts(first : 1, where: { orderby: { field: DATE, order: DESC},}) {
news:	edges {
    node {
      id
date
title
slug
      extraPostInfo {
        videos {
          mediaItemUrl
        }
        previewImage {
          mediaItemUrl
        }
        summary
      }
      date
      author {
        node {
          name
        }
      }
    }
  }
}
    }
    `
  );

  return data?.posts;
}
//lifestyle
export async function getlifestyle(preview) {
  const data = await fetchAPI(
    `
    query lifestyles {
      posts(first : 1, where: { orderby: { field: DATE, order: DESC},categoryName: "lifestyle"}) {
life :	edges {
    node {
      id
date
title
slug
      extraPostInfo {
        videos {
          mediaItemUrl
        }
        previewImage {
          mediaItemUrl
        }
        summary
      }
      date
      author {
        node {
          name
        }
      }
    }
  }
}
    }
    `
  );

  return data?.posts;
}

  //politics
  export async function getpolitics(preview) {
    const data = await fetchAPI(
      `
      query politics {
        posts(first : 1, where: { orderby: { field: DATE, order: DESC},categoryName: "politics"}) {
politic:	edges {
      node {
        id
	date
	title
	slug
        extraPostInfo {
          videos {
            mediaItemUrl
          }
          previewImage {
            mediaItemUrl
          }
          summary
        }
        date
        author {
          node {
            name
          }
        }
      }
    }
	}
      }
      `
    );

    return data?.posts;
  }
  
  ///sports
  export async function getsports(preview) {
    const data = await fetchAPI(
      `
      query sports {
        posts(first : 1, where: { orderby: { field: DATE, order: DESC},categoryName: "sports"}) {
	sport:edges {
      node {
        id
	date
	title
	slug
        extraPostInfo {
          videos {
            mediaItemUrl
          }
          previewImage {
            mediaItemUrl
          }
          summary
        }
        date
        author {
          node {
            name
          }
        }
      }
    }
	}
      }
      `
    );

    return data?.posts;
  }
  
  //financial
  export async function getfinancial(preview) {
    const data = await fetchAPI(
      `
      query financial {
        posts(first : 1, where: { orderby: { field: DATE, order: DESC},categoryName: "financial"}) {
	financials: edges {
      node {
        id
	date
	title
	slug
        extraPostInfo {
          videos {
            mediaItemUrl
          }
          previewImage {
            mediaItemUrl
          }
          summary
        }
        date
        author {
          node {
            name
          }
        }
      }
    }
	}
      }
      `
    );

    return data?.posts;
  }
  