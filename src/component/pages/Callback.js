import React, { useEffect } from "react";
import axios from "axios";

const Callback = () => {
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");

    if (code) {
      exchangeCodeForToken(code);
    }
  }, []);

  const exchangeCodeForToken = async (code) => {
    try {
      const response = await axios.post(
        "https://www.linkedin.com/oauth/v2/accessToken",
        null,
        {
          params: {
            grant_type: "authorization_code",
            code: "AQVC45y3tP1GRNIs-_Jewb9d2im_ZQlzBUX6g7CnbBrADNcIrE-7oJlx9tuWNF-hFvK3Up2PD15JzGYMhPDsscZy5Fzocwp7qofoGo6UvAHRPOKbbywwXMUKkEMjQYwZJS9KlOXBeh50QxK5H1Kyx_eg1F4J1e3GhTYSpPHZ66yagA9Zs-j8SpuF-ZLqQo2e59ZbLGhGbVqp0zt_aJiQ4P5hU84DHByCnfy179fOW3FGwj6uO3YevejR0uVGIErSFsaSzhNuWaSaLm72fMvs2joy17K0hhaWJOQcClax60qTQ-nl4UiFXImVtki0XDY6zWGXHgdBeIfscz-MUdIN_bIhl8dR4w",
            redirect_uri: "http://localhost:3000/callback",
            client_id: "8600jbmcddcu1z",
            client_secret: "Obm8z5svPr1KStCp",
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      const accessToken = response.data.access_token;
      console.log("access", accessToken);
      // Save the access token securely!
    } catch (error) {
      console.error("Error exchanging code for token", error);
    }
  };

  return <div>Processing...</div>;
};

export default Callback;
