// -----------------
// Global variables
// -----------------

// Codebeat:disable[LOC,ABC,BLOCK_NESTING,ARITY]
const sendMessage = require("../../core/command.send");

// -------------------
// Available Settings
// -------------------

function getHistory (data)
{

   // ---------------
   // V1.0.0 History
   // ---------------

   const v100History = function v100History (data)
   {

      // -------------
      // Command Code
      // -------------

      data.color = "info";
      data.text = `**V1.0.0**\n` +
      "```md\n" +
      `# Version 1.0.1 - Release Date: 7/9/2021 \n` +
      `# Version 1.0.2 - Release Date: 7/9/2021 \n` +
      `# Version 1.0.3 - Release Date: 7/9/2021 \n` +
      `# Version 1.0.4 - Release Date: 7/9/2021 \n` +
      `# Version 1.0.5 - Release Date: 7/9/2021 \n` +
      `# Version 1.0.6 - Release Date: 7/9/2021 \n` +
      `# Version 1.0.7 - Release Date: 7/9/2021 \n` +
      "```\n";

      // -------------
      // Send message
      // -------------

      return sendMessage(data);

   };

   // ---------------
   // V1.1.0 History
   // ---------------

   const v110History = function v110History (data)
   {



      // -------------
      // Send message
      // -------------

      return sendMessage(data);

   };


   // ---------------
   // V1.2.0 History
   // ---------------

   const v120History = function v120History (data)
   {

      // -------------
      // Send message
      // -------------

      return sendMessage(data);

   };

   // ---------------
   // V1.2.1 History
   // ---------------

   const v121History = function v121History (data)
   {



      return sendMessage(data);

   };

   // ---------------
   // V1.2.2 History
   // ---------------

   const v122History = function v122History (data)
   {

      // -------------
      // Send message
      // -------------

      return sendMessage(data);

   };

   // ---------------
   // V1.2.3 History
   // ---------------

   const v123History = function v123History (data)
   {


      // -------------
      // Send message
      // -------------

      return sendMessage(data);

   };

   // ---------------
   // V1.2.4 History
   // ---------------

   const v124History = function v124History (data)
   {


      // -------------
      // Send message
      // -------------

      return sendMessage(data);

   };

   // ---------------
   // V1.2.5 History
   // ---------------

   const v125History = function v125History (data)
   {


      // -------------
      // Send message
      // -------------

      return sendMessage(data);

   };

   const guilds = function guilds (data)
   {


      // -------------
      // Send message
      // -------------

      return sendMessage(data);

   };

   // --------------------------
   // Execute command if exists
   // --------------------------



   const historyParam = data.cmd.params.split(" ")[0].toLowerCase();
   if (Object.prototype.hasOwnProperty.call(
      validHistory,
      historyParam
   ))
   {

      return validHistory[historyParam](data);

   }

   // ------------------------
   // Error for invalid param
   // ------------------------



   return sendMessage(data);

}

// --------------------------
// Proccess settings params
// --------------------------

module.exports = function run (data)
{

   // -----------------------------------
   // Error if settings param is missing
   // -----------------------------------

   if (!data.cmd.params)
   {

      // -------------
      // Command Code
      // -------------

      data.color = "info";
      data.text = `adembot Was Born on the **7/09/21** ` +

      // -------------
      // Send message
      // -------------

      return sendMessage(data);

   }

   // ----------------
   // Execute setting
   // ----------------

   return getHistory(data);

};
