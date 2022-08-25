import Curriculum from "curriculum-js";

async function validate() {
	var curriculum = new Curriculum();
	var schema = await curriculum.loadContextFromFile(
		"curriculum-referentiekader",
		"context.json"
	);
	await curriculum.loadContextFromFile(
    "curriculum-basis",
    "curriculum-basis/context.json"
  );
	try {
		await curriculum.validate(schema);
		console.log("Data is valid!");
	} catch (error) {
		error.validationErrors.forEach((error) => {
			console.log(error.instancePath + ": " + error.message);
		});
	}
}

validate();