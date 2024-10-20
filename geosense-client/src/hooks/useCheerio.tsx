import { load } from "cheerio";
import axios from "axios";

export default function useCheerio() {
  const test = async () => {
    try {
      fetch("https://ngodarpan.gov.in/index.php/home/statewise", {
        mode: "no-cors",
      })
        .then((response) => response.text())
        .then((html) => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, "text/html");

          // Extract the page title
          const pageTitle = doc!.querySelector("title")!.innerText;
          console.log("Page Title:", pageTitle);

          // Extract all links
          const links = Array.from(doc.querySelectorAll("a")).map(
            (a) => a.href
          );
          console.log("Links:", links);
        })
        .catch((err) => console.error("Error:", err));
      return;
      const response = await fetch(
        "https://ngodarpan.gov.in/index.php/home/statewise",
        {
          mode: "no-cors",
          headers: {
            "Content-Type": "text/html",
          },
        }
      );
      console.log(response.headers);
      const $ = load(response.data);
      $("a.bluelink11px").each((index, element) => {
        console.log($(element).attr("href"));
      });
    } catch (err) {
      console.error(err);
    }
  };
  return { test };
}
