from RBAC.dataBase import RoleData,UserData
class Role():
    
    def addRole(self, name, role_id, description="This is a role"):
        self.name = name
        self.role_id = role_id
        self.description = description
        RoleData().addRole(self.name,self.role_id,self.description)
        
    def addUser(self,user_id,role_id):
        RoleData().addUser(user_id, role_id)
    
    def deleteUser(self,user_id,role_id):
        RoleData().deleteUser(user_id, role_id)
        