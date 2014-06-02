﻿using System;

namespace Microsoft.Azure.Jobs.Host
{
    internal class DefaultNameResolver : INameResolver
    {
        public string Resolve(string name)
        {
            throw new NotImplementedException("INameResolver must be supplied to resolve '%" + name + "%'.");
        }
    }
}
