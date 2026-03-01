import React, { useState } from "react";
import { Modal, IconButton, Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FullscreenIcon from "@mui/icons-material/Fullscreen";

const Certificate = ({ ImgSertif }) => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<Box component="div" sx={{ width: "100%" }}>
			{/* Thumbnail Container */}
			<Box
				sx={{
					position: "relative",
					overflow: "hidden",
					borderRadius: 2,
					cursor: "pointer",
					boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
					transition: "all 0.3s ease-in-out",
					"&:hover": {
						transform: "translateY(-5px)",
						boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
						"& .overlay": { opacity: 1 },
						"& .hover-content": { opacity: 1, transform: "translate(-50%, -50%)" },
						"& .certificate-image": { filter: "brightness(0.7)" },
					},
				}}
				onClick={handleOpen}
			>
				<img
					className="certificate-image"
					src={ImgSertif}
					alt="Certificate Thumbnail"
					style={{
						width: "100%",
						height: "auto",
						display: "block",
						transition: "filter 0.3s ease",
					}}
				/>
				<Box
					className="overlay"
					sx={{
						position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
						opacity: 0,
						background: "rgba(0, 0, 0, 0.5)",
						transition: "opacity 0.3s ease",
					}}
				/>
				<Box
					className="hover-content"
					sx={{
						position: "absolute", top: "50%", left: "50%",
						transform: "translate(-50%, -40%)",
						opacity: 0,
						transition: "all 0.4s ease",
						textAlign: "center",
						color: "white",
					}}
				>
					<FullscreenIcon sx={{ fontSize: 40, mb: 1 }}/>
					<Typography variant="h6" sx={{ fontWeight: 600 }}>
						View Certificate
					</Typography>
				</Box>
			</Box>

			{/* Modal for Full View */}
			<Modal
				open={open}
				onClose={handleClose}
				closeAfterTransition
				sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
			>
				<Box
					sx={{
						position: "relative",
						maxWidth: "90vw",
						maxHeight: "90vh",
						outline: "none",
					}}
				>
					<IconButton
						onClick={handleClose}
						sx={{
							position: "absolute",
							top: { xs: 8, md: 16 },
							right: { xs: 8, md: 16 },
							color: "white",
							bgcolor: "rgba(0,0,0,0.5)",
							"&:hover": { bgcolor: "rgba(0,0,0,0.8)" },
						}}
					>
						<CloseIcon />
					</IconButton>
					<img
						src={ImgSertif}
						alt="Certificate Full View"
						style={{
							width: "auto",
							height: "auto",
							maxWidth: "100%",
							maxHeight: "90vh",
							display: "block",
						}}
					/>
				</Box>
			</Modal>
		</Box>
	);
};

export default Certificate;