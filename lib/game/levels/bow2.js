ig.module( 'game.levels.bow2' )
.requires( 'impact.image','game.entities.electricball','game.entities.door','game.entities.button','game.entities.downFloorTrigger','game.entities.mage','game.entities.messenger','game.entities.upFloorTrigger','game.entities.rogue','game.entities.slimer','game.entities.player' )
.defines(function(){
LevelBow2=/*JSON[*/{"entities":[{"type":"EntityElectricball","x":328,"y":232},{"type":"EntityElectricball","x":900,"y":828},{"type":"EntityElectricball","x":336,"y":624},{"type":"EntityElectricball","x":336,"y":676},{"type":"EntityElectricball","x":336,"y":724},{"type":"EntityElectricball","x":900,"y":924},{"type":"EntityElectricball","x":908,"y":360},{"type":"EntityElectricball","x":900,"y":972},{"type":"EntityDoor","x":832,"y":272,"settings":{"name":"bow2x64y236","usesKey":0}},{"type":"EntityButton","x":64,"y":236,"settings":{"name":"bow2x64y236"}},{"type":"EntityElectricball","x":336,"y":576},{"type":"EntityButton","x":1184,"y":368,"settings":{"name":"bow2x1184y368","piToTurn":1}},{"type":"EntityElectricball","x":336,"y":772},{"type":"EntityElectricball","x":336,"y":868},{"type":"EntityElectricball","x":336,"y":820},{"type":"EntityElectricball","x":900,"y":580},{"type":"EntityElectricball","x":336,"y":972},{"type":"EntityElectricball","x":900,"y":628},{"type":"EntityElectricball","x":900,"y":676},{"type":"EntityElectricball","x":900,"y":728},{"type":"EntityElectricball","x":336,"y":920},{"type":"EntityElectricball","x":900,"y":776},{"type":"EntityElectricball","x":900,"y":876},{"type":"EntityDownFloorTrigger","x":480,"y":96,"settings":{"size":{"x":32,"y":36},"destx":992,"desty":800}},{"type":"EntityDoor","x":384,"y":400,"settings":{"name":"bow2x1184y368","usesKey":0}},{"type":"EntityMage","x":252,"y":708},{"type":"EntityMage","x":252,"y":656},{"type":"EntityMage","x":252,"y":852},{"type":"EntityMage","x":252,"y":908},{"type":"EntityMage","x":992,"y":660},{"type":"EntityMage","x":992,"y":720},{"type":"EntityMage","x":996,"y":848},{"type":"EntityMage","x":996,"y":904},{"type":"EntityMessenger","x":468,"y":320,"settings":{"size":{"x":16,"y":96},"message":"Test your bow skills against the mages"}},{"type":"EntityUpFloorTrigger","x":608,"y":1244,"settings":{"size":{"x":64,"y":36},"destx":152,"desty":497}},{"type":"EntityRogue","x":631,"y":822},{"type":"EntityRogue","x":739,"y":926},{"type":"EntityRogue","x":811,"y":814},{"type":"EntityRogue","x":475,"y":822},{"type":"EntityRogue","x":551,"y":730},{"type":"EntityRogue","x":735,"y":734},{"type":"EntityRogue","x":559,"y":922},{"type":"EntitySlimer","x":548,"y":364},{"type":"EntitySlimer","x":676,"y":364},{"type":"EntityPlayer","x":508,"y":161}],"layer":[{"name":"background","width":40,"height":50,"linkWithCollision":false,"visible":1,"tilesetName":"media/ground1.png","repeat":false,"preRender":false,"distance":"1","tilesize":32,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,107,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,107,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,107,73,73,107,107,107,73,73,73,73,73,73,73,73,73,73,73,107,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,107,73,73,107,32,107,73,73,73,73,73,73,73,73,73,73,73,107,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,107,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,107,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,107,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,107,0,0,0,0,0,0,0,0,0,0,0],[0,107,107,107,107,107,107,107,107,107,107,107,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,107,0,0,0,0,0,0,0,0,0,0,0],[0,107,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,107,0,0,0,0,0,0,0,0,0,0,0],[0,107,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,107,0,0,0,0,0,0,0,0,0,0,0],[0,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,73,73,107,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,107,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,107,107,107,107,107,107,107,107,107,107,107,0],[0,0,0,0,0,0,0,0,0,0,0,107,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,107,0],[0,0,0,0,0,0,0,0,0,0,0,107,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,107,0],[0,0,0,0,0,0,0,0,0,0,0,107,73,73,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,0],[0,0,0,0,0,0,0,0,0,0,0,107,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,107,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,107,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,107,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,107,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,107,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,107,107,107,107,107,107,107,107,107,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,107,107,107,107,107,107,107,107,107,0,0,0],[0,0,0,107,0,0,0,0,0,0,0,0,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,0,0,0,0,0,0,0,0,107,0,0,0],[0,0,0,107,0,0,0,0,0,0,0,0,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,0,0,0,0,0,0,0,0,107,0,0,0],[0,0,0,107,0,0,0,74,74,74,0,0,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,0,0,74,74,74,0,0,0,107,0,0,0],[0,0,0,107,0,0,0,74,74,74,0,0,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,0,0,74,74,74,0,0,0,107,0,0,0],[0,0,0,107,0,0,0,74,74,74,0,0,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,0,0,74,74,74,0,0,0,107,0,0,0],[0,0,0,107,0,0,0,74,74,74,0,0,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,0,0,74,74,74,0,0,0,107,0,0,0],[0,0,0,107,0,0,0,0,0,0,0,0,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,0,0,0,0,0,0,0,0,107,0,0,0],[0,0,0,107,0,0,0,0,0,0,0,0,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,0,0,0,0,0,0,0,0,107,0,0,0],[0,0,0,107,0,0,0,74,74,74,0,0,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,0,0,74,74,74,0,0,0,107,0,0,0],[0,0,0,107,0,0,0,74,74,74,0,0,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,0,0,74,74,74,0,0,0,107,0,0,0],[0,0,0,107,0,0,0,74,74,74,0,0,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,0,0,74,74,74,0,0,0,107,0,0,0],[0,0,0,107,0,0,0,74,74,74,0,0,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,0,0,74,74,74,0,0,0,107,0,0,0],[0,0,0,107,0,0,0,0,0,0,0,0,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,0,0,0,0,0,0,0,0,107,0,0,0],[0,0,0,107,0,0,0,0,0,0,0,0,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,0,0,0,0,0,0,0,0,107,0,0,0],[0,0,0,107,107,107,107,107,107,107,107,107,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,107,107,107,107,107,107,107,107,107,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,107,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,107,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,107,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,107,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,107,107,107,73,73,73,73,73,73,73,73,73,73,73,73,107,107,107,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,107,73,73,73,73,73,73,73,73,73,73,73,73,107,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,107,107,107,107,73,73,73,73,73,73,107,107,107,107,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,107,73,73,73,73,73,73,107,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,107,73,107,29,31,107,73,107,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,107,73,107,107,107,107,73,107,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,107,73,73,73,73,73,73,107,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,107,107,107,107,107,107,107,107,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{"name":"collision","width":40,"height":50,"linkWithCollision":false,"visible":1,"tilesetName":"","repeat":false,"preRender":false,"distance":1,"tilesize":32,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0],[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],[0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0],[0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0],[0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0],[0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0],[0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0],[0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0],[0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}]}/*]JSON*/;
LevelBow2Resources=[new ig.Image('media/ground1.png')];
});