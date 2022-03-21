const git = require('simple-git')();

async function getChanges(data) {
  if (data.showChangelog !== true ) return null
  
  const options = {
    file: data.page.inputPath,
  };
  
  console.log("Getting changelog...")
  
  try {
    const history =  await git.log(options);
    return history.all
  } catch (e) {
    return null;
  }

}

module.exports = {
  eleventyComputed: {
    changes: async data => await getChanges(data)
  }
}