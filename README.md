# 維特數位生活｜軟體集合入口 1.0

## 開啟與部署
解壓縮後直接開啟 index.html。此為完整靜態網站，不需要安裝套件。
將 HTML 頁面、assets 資料夾與 .nojekyll 一起放到主機公開目錄即可；所有網站內部路徑採相對路徑。

## 入口與軟體分頁
- index.html：純品牌集合入口，不展示特定軟體的名稱、功能、價格或平台。
- software.html：所有作品的目錄；目前僅列入已提供資料的鍵盤音效系統。
- support.html：依軟體查找說明及政策。
- about.html、contact.html、updates.html：品牌、聯絡與網站更新。
- terms.html、privacy.html：網站共通條款與隱私。
- soundboard.html：鍵盤音效系統專屬介紹。
- pricing.html、guide.html：鍵盤音效系統價格及教學。
- soundboard-terms.html、soundboard-privacy.html、soundboard-updates.html：軟體專屬政策及版本。

## 如何新增作品
1. 複製 soundboard.html 作為新作品頁，更換標題、描述、內容與專屬導覽。
2. 在 software.html 新增一張 catalog-item，加入新作品連結。
3. 在 support.html 新增對應說明與政策入口。
4. 有不同授權或資料行為的軟體，建立自己的條款與隱私頁，不沿用鍵盤音效系統價格／授權。
5. 更新 updates.html。首頁不需加入新軟體銷售內容。

## 修改既有資訊
品牌與全站聯絡內容存在各 HTML 的共用導覽／頁尾及 contact.html。
價格存在 pricing.html 與 soundboard-terms.html；試算加購金額在 pricing.html 的 data-price，基本金額在 assets/site.js。
新增教學影片請修改 guide.html，並同步更新適用隱私說明。
共用視覺樣式：assets/style.css。互動：assets/site.js。

## 維護備註（不顯示於頁面）
網站視覺與導覽已定稿，不表示桌面軟體也已完成設備碼綁定或正式安裝包。
鍵盤音效系統使用 V0.1.3 對外分類；原參考專案標示 v1.4.3，請在發行安裝檔時統一。
購買前仍需確認付款方式、交付時間、設備碼產生與重灌／硬體維修處理、取消與瑕疵處理等實際作業。
請依實際主機、個資利用期間／地區／對象與方式、交易紀錄保存及遠端工具補充適用告知。網站不虛構保存年限、固定交期或一律不退款規則。
目前只有一款已提供資料的軟體，沒有虛構其他作品；可自行持續新增。
本包不含桌面程式、客戶資料或安裝檔。未代為公開上線。

## 驗證
內部連結、段落錨點與價格試算經程式檢查。自適應樣式已實作；因目前環境無可用瀏覽器，仍需實機檢查桌面與手機呈現。
