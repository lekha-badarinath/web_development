from RBAC.dataBase import UserData

class User():
    def addUser(self,first,last,user_id):
        self.first = first
        self.last = last
        self.user_id = user_id
        UserData().addUser(self.first,self.last,self.user_id)

    def assignRole(self,user_id,role_id):
        UserData().assignRole(user_id, role_id)
    
    def deleteRole(self,user_id,role_id):
        UserData().deleteRole(user_id, role_id)
    