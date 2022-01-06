# Repro

* Create a Scratch Org:
`sfdx force:org:create -f config/project-scratch-def.json --setalias evallws --setdefaultusername `

* Push Source:
`sfdx force:source:push`

* Open Scratch Org
* Go to Account tab
* Create/open an account record
* Click on the My LWC Quick Action button

Cancel is working, Save is crashing because of `eval("$A.get('e.force:refreshView').fire();");`.  
No error nor in the UI neither in the Chrome Dev Console, but remaining code is not executed.