import { IconButton, Stack } from "@chakra-ui/react";
import {
	FacebookShareButton,
	LinkedinShareButton,
	TwitterShareButton,
	WhatsappShareButton,
} from "next-share";
import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";

const SocialShareButtons: React.FC<{
	url: string;

	title: string;
}> = ({ title, url }) => {
	return (
		<Stack direction={"row"}>
			<FacebookShareButton url={url} quote={title}>
				<IconButton
					as={"div"}
					aria-label="share"
					icon={<FaFacebookF />}
					size={"sm"}
					rounded={"full"}
					colorScheme={"facebook"}
					shadow={"lg"}
				/>
			</FacebookShareButton>
			<TwitterShareButton url={url} title={title}>
				<IconButton
					as={"div"}
					aria-label="share"
					icon={<FaTwitter />}
					size={"sm"}
					rounded={"full"}
					colorScheme={"twitter"}
					shadow={"lg"}
				/>
			</TwitterShareButton>
			<LinkedinShareButton url={url}>
				<IconButton
					as={"div"}
					aria-label="share"
					icon={<FaLinkedinIn />}
					size={"sm"}
					rounded={"full"}
					colorScheme={"linkedin"}
					shadow={"lg"}
				/>
			</LinkedinShareButton>
			<WhatsappShareButton url={url} title={title} separator=":: ">
				<IconButton
					as={"div"}
					icon={<FaWhatsapp />}
					aria-label="share"
					size={"sm"}
					rounded={"full"}
					colorScheme={"whatsapp"}
					shadow={"lg"}
				/>
			</WhatsappShareButton>
		</Stack>
	);
};

export default SocialShareButtons;
