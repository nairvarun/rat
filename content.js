const re = new RegExp('http(s)?://.*');
res = [];
document.querySelectorAll("#search a").forEach(a => res.push(a.getAttribute("href")));
res.filter(x => re.test(x));
