# The F2E - 互動式官方網頁

## 網站介紹

依照設計師的設計稿來重新設計 [The F2E](https://2022.thef2e.com/) 的官方網頁，使用者可以從該網頁中得知：

- 活動關卡資訊
- 活動報名方式
- 活動獎賞資訊
- etc...

由於主題是「動態互動網頁」，所以使用了大量動態效果來提升網站的互動性，並盡可能確保 RWD 的品質。

![demo](./demo.gif)

Demo url： https://jubeatt.github.io/the-f2e-parallax-interactive-website/

## 使用技術

- React
- TpyeScript
- SCSS
- CSS Flex / Grid
- CSS Animation

## 使用套件

- GreenSock
- Swiper
- animated-number-react

## 資料夾結構

```
├── src
│   ├── App.tsx
│   ├── assets（網站使用字體，圖片）
│   │   ├── font
│   │   └── images
│   ├── components (元件)
│   │   ├── Board.tsx
│   │   ├── Card.tsx
│   │   └── ...
│   ├── styles
│   │   ├── components（元件樣式）
│   │   ├── layouts（佈局樣式）
│   │   └── utils（變數、動畫）
│   ├── svgs
│   │   ├── components（所有用到的 SVG ）
│   │   └── index.tsx
│   ├── view（每一個區塊的主元件）
│   │   ├── Banner.tsx
│   │   ├── EventInfo.tsx
│   │   ├── ....
```

## 運行方式

1. clone 此專案到本地端

```
git clone https://github.com/jubeatt/the-f2e-parallax-interactive-website.git
```

2. 安裝專案的 dependencies

```
npm install
```

3. 啟動開發環境

```
npm run dev
```
