const Command = require("../base/Command.js")
class Koruma extends Command {
    constructor(client) {
        super(client, {
            name: "Koruma",
            aliases: ["koruma"]
        });
    }

    async run(message, args, perm) {
        if(!message.member.hasPermission("ADMINISTRATOR")) return
        if(!args[0]) {
          
          // Führer          
            message.guild.roles.cache.get("891706535166771240").setPermissions(0) // Owner
            message.guild.roles.cache.get("892427994671480862").setPermissions(0) // CEO    
            message.guild.roles.cache.get("893834369943347200").setPermissions(0) // Bael
            message.guild.roles.cache.get("891756044286590977").setPermissions(0)
           message.guild.roles.cache.get("891756077790679101").setPermissions(0)// Çift Yıldız
          message.guild.roles.cache.get("891971519188701204").setPermissions(0)
            message.channel.send(`<a:0667_red_667:891732556087705631> Sunucumuzun tüm rolleri güvenlik açısından devre dışı bırakılmıştır.`)
            
            
    
        }
        if(args[0] == "kapat") {
        // Führer
            message.guild.roles.cache.get("891706535166771240").setPermissions(8)
            message.guild.roles.cache.get("892154099875872780").setPermissions(8)// Owner
            message.guild.roles.cache.get("892427994671480862").setPermissions(268435584) // CEO    
            message.guild.roles.cache.get("893834369943347200").setPermissions(268435584) // Bael
            message.guild.roles.cache.get("891756044286590977").setPermissions(268435584)
           message.guild.roles.cache.get("891756077790679101").setPermissions(128)// Çift Yıldız
          message.guild.roles.cache.get("891971519188701204").setPermissions(128)
            message.channel.send(`<a:0667_onay_667:891732555605356604> Sunucumuzun yönetici rolleri tekrardan aktif hale getirilmiştir.`)
       
        } 
    }
}

module.exports = Koruma;
