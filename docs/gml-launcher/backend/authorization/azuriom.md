# Azuriom

Since Gml emulates the full functionality of the licensed version of the game, and  
Azuriom generates incorrect UUIDs for users, some adjustments are required:

- Open the file ```/your_site_folder/app/Games/Minecraft/MinecraftOfflineGame.php``` and locate the following code:

```php
public function getUserUniqueId(string $name): ?string
    {
        $factory = new UuidFactory();
        $factory->setNameGenerator(new class implements NameGeneratorInterface
        {
            public function generate(UuidInterface $ns, string $name, string $hashAlgorithm): string
            {
                return md5($name, true);
            }
        });
        $uuid = $factory->uuid3(Uuid::NIL, 'OfflinePlayer:'.$name)->toString();

        return Str::remove('-', $uuid);  // < --- This line
    }
````

* Replace `return Str::remove('-', $uuid);` with `return $uuid;`.