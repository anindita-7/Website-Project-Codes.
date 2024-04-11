function suggestTreatment() {
    var symptomsInput = document.getElementById("symptoms").value.toLowerCase();
    var treatmentList = document.getElementById("treatmentList");

    // Clear previous suggestions
    treatmentList.innerHTML = "";

    // Example medicine and remedy data
    var treatmentData = {
        "headache": {
            "medicines": ["Tylenol", "Advil", "Excedrin", "Aspirin", "Aleve"],
            "remedies": ["Rest", "Hydration", "Cold compress"]
        },
        "fever": {
            "medicines": ["Acetaminophen", "Ibuprofen", "Naproxen", "Tylenol Cold", "Advil Cold & Sinus"],
            "remedies": ["Rest", "Hydration", "Cold compress"]
        },
        "cough": {
            "medicines": ["Robitussin", "Mucinex", "Delsym", "NyQuil", "Halls"],
            "remedies": ["Honey", "Steam inhalation", "Warm liquids"]
        },
        "sore throat": {
            "medicines": ["Chloraseptic", "Throat Coat", "Ricola", "Cepacol", "Vicks"],
            "remedies": ["Saltwater gargle", "Throat lozenges", "Warm tea with honey"]
        },
        "runny nose": {
            "medicines": ["Claritin", "Zyrtec", "Sudafed", "Benadryl", "Flonase"],
            "remedies": ["Steam inhalation", "Nasal saline spray", "Warm liquids"]
        },
        "muscle pain": {
            "medicines": ["Aleve", "Biofreeze", "Bengay", "Icy Hot", "Tiger Balm"],
            "remedies": ["Rest", "Massage", "Stretching exercises"]
        },
        "nausea": {
            "medicines": ["Pepto-Bismol", "Dramamine", "Emetrol", "Sea-Band", "Ginger"],
            "remedies": ["Clear fluids", "Ginger tea", "BRAT diet (Bananas, Rice, Applesauce, Toast)"]
        },
        "diarrhea": {
            "medicines": ["Imodium", "Pepto-Bismol", "Kaopectate", "Lomotil", "Diar-Aid"],
            "remedies": ["BRAT diet", "Clear fluids", "Probiotics"]
        },
        "heartburn": {
            "medicines": ["Tums", "Rolaids", "Zantac", "Pepcid", "Nexium"],
            "remedies": ["Antacids", "Avoiding trigger foods", "Elevating head while sleeping"]
        },
        "allergy": {
            "medicines": ["Benadryl", "Zyrtec", "Allegra", "Clarinex", "Xyzal"],
            "remedies": ["Avoiding allergens", "Saline nasal rinse", "HEPA air filter"]
        }
    };

    // Check if symptoms match with treatment data
    if (symptomsInput in treatmentData) {
        var suggestedMedicines = treatmentData[symptomsInput].medicines;
        var suggestedRemedies = treatmentData[symptomsInput].remedies;

        var treatmentDiv = document.createElement("div");

        var medicinesHeader = document.createElement("h3");
        medicinesHeader.textContent = "Medicines:";
        treatmentDiv.appendChild(medicinesHeader);

        var medicinesList = document.createElement("ul");
        suggestedMedicines.forEach(function(medicine) {
            var medicineItem = document.createElement("li");
            medicineItem.textContent = medicine;
            medicinesList.appendChild(medicineItem);
        });
        treatmentDiv.appendChild(medicinesList);

        var remediesHeader = document.createElement("h3");
        remediesHeader.textContent = "Remedies:";
        treatmentDiv.appendChild(remediesHeader);

        var remediesList = document.createElement("ul");
        suggestedRemedies.forEach(function(remedy) {
            var remedyItem = document.createElement("li");
            remedyItem.textContent = remedy;
            remediesList.appendChild(remedyItem);
        });
        treatmentDiv.appendChild(remediesList);

        treatmentList.appendChild(treatmentDiv);
    } else {
        treatmentList.textContent = "No treatment found for the given symptoms.";
    }
}
