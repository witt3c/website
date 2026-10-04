# 維特數位生活網站初稿 0.1

完成日期：2026-10-04。這是靜態網站原始碼，不含桌面音效程式或安裝包。

## 在電腦預覽
解壓縮後，雙擊 index.html 即可瀏覽所有頁面。沒有套件安裝或建置步驟。
assets 資料夾必須與 HTML 頁面一起保留。價格試算只在瀏覽器計算，不會送出訂單。

## 檔案與修改
- index.html：品牌首頁與軟體清單。
- soundboard.html：音效系統介紹。
- pricing.html：價格、加購試算與交付說明。
- guide.html：文字教學、影片準備中區塊。
- terms.html、privacy.html：條款／隱私草稿。
- updates.html、contact.html：更新及聯絡資訊。
- assets/style.css：共用樣式；assets/site.js：選單與試算。
- 404.html：不存在頁面提示。

頁面使用相對路徑，能放在網域根目錄或一般子目錄；沒有外部字型、分析工具、會員系統、第三方圖片或影片追蹤。
新增影片時應更新隱私政策，優先使用點選後才載入的方式。

## GitHub 與正式主機
GitHub 可以存放原始碼。但 GitHub Pages 不允許主要以促成商業交易為目的的網站，不限於是否在網頁直接收款。本稿含價格與購買流程，不應直接假設符合 Pages 規則。
https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits
可先將原始碼存入 GitHub，再由符合用途的靜態主機提供網站；尚未代為建立儲存庫或上線。
若確定僅以作品／政策文件用途使用 Pages 並確認符合限制，可將網站檔案放入儲存庫根目錄，在 Settings > Pages 選擇分支與根目錄發布。務必保留 assets 和 .nojekyll。
不要把客戶設備碼、付款資料、專屬安裝檔或音效備份提交到公開儲存庫。

## 正式上線前必須補齊
1. 退款／取消規則、瑕疵處理、更新與錯誤修正界線、支援期限。
2. 付款方式、交付時程、下載期限、稅務／收據資訊與依法應揭露的經營者資料。
3. 設備碼生成／提供方式、授權驗證是否連線、重灌／硬體故障處理；目前僅是需求，網站不代表已完成軟體功能。
4. 設備碼與聯絡／交易紀錄的保存期間、位置／地區、存取人員、委託服務及刪除流程。
5. 遠端工具、權限範圍與是否錄影；教學影片網址。
6. 完成軟體 Windows 實機驗收、品牌改名及版本統一（對外 V0.1.3，參考程式仍為 v1.4.3）。
7. 確認正式主機及其隱私資訊，完成條款／政策審閱，填入生效日期。
8. 移除各頁預覽條及草稿字樣前，先解決對應待確認項目。定稿後移除各 HTML 的 noindex,nofollow，並修改 robots.txt 為允許索引；noindex 不是存取權限保護。

正式政策不可直接宣稱所有客製數位商品均不退款。解除權例外需依交易性質及告知／同意程序確認：
https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=J0170012
https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=J0170001
個資告知參考（留意條文施行狀態）：
https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=I0050021

## 內容依據
價格、開發者與授權依使用者本次確認。功能依先前讀取的 README.txt、main.js、storage.js、renderer.js 主要程式整理；不是新一次完整安全稽核。沒有加上未經確認的終身更新、退款排除、固定交期或平台認證承諾。
網站程式為本次新建立，不修改原音效軟體。
