import requests
from parsel import Selector

response = requests.get("https://books.toscrape.com/")
selector = Selector(text=response.text)
print(selector.css("img.thumbnail").getall())
