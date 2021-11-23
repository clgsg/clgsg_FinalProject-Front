import { useHistory } from "react-router-dom";
import Button from "components/Button";
import "components/index.scss";


export default function TopHeader() {
	const history = useHistory();

	return (
		<div bg={"cyan.700"} px={4} h="20vh" w="100vw">
			<div h={20} alignItems={"center"} justifyContent={"center"}>
				<div alignItems={"center"}>
					<div direction={"column"} spacing={2}>
						<div>
							<div
								fontFamily="Road Rage"
								fontSize={{ base: "20vh", md: "30vh" }}
							>
								megustalapachanga
								<img
									src="./headerimg.tiff"
									alt="Balones y pelotas"
									width="100px"
									height="100px"
								/>
							</div>
						</div>
						<div spacing={4}>
							<Button onClick={() => history.push("/home")}>
								Acceder
							</Button>
							<Button> Quiero registrarme</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
