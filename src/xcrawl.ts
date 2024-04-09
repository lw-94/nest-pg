// 1.导入模块 ES/CJS
const xCrawl =  require('x-crawl')

// 2.创建一个爬虫实例
const myXCrawl = xCrawl({ maxRetry: 3, intervalTime: { max: 2000, min: 1000 } })

// 3.设置爬取任务
// 调用 startPolling API 开始轮询功能，每隔一天会调用回调函数
myXCrawl.startPolling({ d: 1 }, async (count, stopPolling) => {
  // 调用 crawlPage API 来爬取页面
  const pageResults = await myXCrawl.crawlPage({
    targets: [
      'https://www.airbnb.cn/s/*/experiences'
    ],
    viewport: { width: 1920, height: 1080 }
  })

  // 通过遍历爬取页面结果获取图片 URL
  const imgUrls = []
  for (const item of pageResults) {
    const { page } = item.data
    const elSelector = '.i9cqrtb'

    // 等待页面元素出现
    await page.waitForSelector(elSelector)

    // 获取页面图片的 URL
    const urls = await page.$$eval(`${elSelector} picture img`, (imgEls) =>
      imgEls.map((item) => item.src)
    )
    imgUrls.push(...urls.slice(0, 6))

    // 关闭页面
    page.close()
  }

  // 调用 crawlFile API 爬取图片
  await myXCrawl.crawlFile({ targets: imgUrls, storeDirs: './imgs' })
})