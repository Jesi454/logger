{ pkgs }: {
  deps = [
    pkgs.sd
    pkgs.systemdMinimal
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server
  ];
}