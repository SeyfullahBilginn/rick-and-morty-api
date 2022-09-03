# Rick and Morty => [DEMO](https://rick-and-morty-case-study.vercel.app)

![dashboard-preview](https://user-images.githubusercontent.com/86732121/188273063-c5c771af-c7e8-469e-a296-a078fedcea1f.gif)


## Development Process

###  I tried to use functional components. I created file named "service" for fetching datas from rick and morty api. I want to collect states widely used (not only for only this project, but also for a large scale project) in contexts which are pagination context and layout context. I wanted to design an algorithm for different versions of pagination (left-aligned, middle aligned, right aligned) as seen below:
  
(rick and morty api doesn't have more than 7 pages. If it had more than 7 pages, it would look like this)
![pagination-preview](https://user-images.githubusercontent.com/86732121/188273094-e6cd2585-890d-4435-a2d9-ccc46c4f9154.gif)

### I decided to display active page variable in url. For that reason, I used [url object](https://developer.mozilla.org/en-US/docs/Web/API/URL/URL) . Thus, users can send the link to share the page they monitor.

![image](https://user-images.githubusercontent.com/86732121/188273948-17252804-c6df-4b20-ab9c-00cb3fc74ab1.png)

## 🛠️ Installation Steps

1. Clone the repository

```bash
git clone https://github.com/SeyfullahBilginn/rick-and-morty-case-study.git
```

2. Change the working directory

```bash
cd rick-and-morty-case-study
```

3. Install dependencies

```bash
npm install
```

4. Run the app

```bash
npm start
```

#### References
At this project [rick and morty api](https://rickandmortyapi.com) is used
