var special = {
  '&amp;': /&/g,
  '&apos;': /'/g,
  '&gt;': />/g,
  '&lt;': /</g,
  '&quot;': /"/g }

function escape(string) {
  return Object.keys(special)
    .reduce(
      function(string, escaped) {
        return string.replace(special[escaped], escaped) },
      string) }

module.exports = escape
