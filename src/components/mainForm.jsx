import React from "react";
import { FormText, Radio, TextArea } from "../ui";
const MainForm = () => {
	return (
		<div>
			<h1 className="mt-3 text-center">
				«Bertus Panels» Янги ходимлар учун сўров анкетаси.
			</h1>
			<form>
				<FormText label={"Исм/Шарифингиз:"} />
				<FormText label={"Ёшингиз:"} type="number" width={"200px"} />
				<FormText
					label={"Телефон рақамингиз:"}
					type="tel"
					defaultValue={"+998 "}
				/>

				<TextArea label={"Манзилингиз:"} height={'100px'}/>
				<TextArea label={"Оилавий холатингиз:(оилали/неча фарзандингиз бор):"} height={'100px'}/>
				<TextArea label={"Маълумотингиз:(кайси укув юртини тамомлагансиз/мутахасислигингиз):"} height={'100px'}/>
				<Radio type={"radio"} id1={"id1"} id2={"id2"}  name={"first-checket"} label={"Компьютерда ишлашни биласизми?"}/>
				<Radio type={"radio"}  id1={"id3"} id2={"id4"}  name={"second-checket"} label={"Судланганмисиз?"}/>
			</form>
		</div>
	);
};

export default MainForm;
