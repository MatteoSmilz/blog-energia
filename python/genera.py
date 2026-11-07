moduli = []

for modulo in moduli:
    modulo.genera()
    print(f"generato: {modulo.__name__}")

if not moduli:
    print("nessuno script da eseguire")