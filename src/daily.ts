import * as dotenv from "dotenv";
dotenv.config();
import axios from "axios";

const accounts = JSON.parse(process.env.HOYO_COOKIES as string);

accounts.forEach(async (account: any, i: number) => {
  console.log(`Account ${i + 1}: Starting...`);
  const res = await axios({
    url: "https://sg-public-api.hoyolab.com/event/luna/os/sign",
    method: "POST",
    data: {
      act_id: "e202303301540311",
      lang: "en-us",
    },
    headers: {
      Cookie: account,
    },
  });

  console.log(`Account ${i + 1}:`, res.data);
});
